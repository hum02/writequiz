package com.writequiz.controller;

import com.writequiz.domain.article.Article;
import com.writequiz.domain.article.ArticleRequestDto;
import com.writequiz.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ArticleRestController {

    private final ArticleService articleService;

    @GetMapping("/api/articles")
    public List<Article> getAllArticle(){
        return articleService.getArticles();
    }

    // 게시글 작성
    @PostMapping("/api/articles")
    public Article createArticle(@RequestBody ArticleRequestDto articleRequestDto){
        System.out.println("Post-Article!!!");
        return articleService.createArticle(articleRequestDto);
    }
    //게시글 삭제
    @DeleteMapping("/api/articles/{id}")
    public Long deleteArticle(@PathVariable Long id){
        articleService.deleteArticle(id);
        return id;
    }


    //게시글 수정
    @PutMapping("/api/articles/{id}")
    public Long updateArticle(@PathVariable Long id, @RequestBody ArticleRequestDto articleRequestDto){
        return articleService.update(id, articleRequestDto);
    }
}
