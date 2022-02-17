package com.writequiz.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class  Article extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String title;           // 게시글 제목

    @Column(length = 1000, nullable = false)
    private String contents;        // 게시글 텍스트형태 (메인 미리보기용)

    @Column(length = 1000, nullable = false)
    private String contentsHtml;    // 게시글 Html형태

    @Column(length = 1000, nullable = false)
    private String contentsMd;      // 게시글 MarkDown 형태

    @Column(nullable = true)
    private String image;           // 게시글 사진링크

    @Column(nullable = false)
    private String author;          // 게시글 작성자


    @Builder
    public Article (String title, String contents, String contentsHtml, String contentsMd,String image, String author){
        this.title = title;
        this.contents = contents;
        this.contentsHtml = contentsHtml;
        this.contentsMd = contentsMd;
        this.image = image;
        this.author = author;

    }



}