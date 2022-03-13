package com.writequiz.repository;

import com.writequiz.domain.article.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article,Long> {
    List<Article> findAllByOrderById(); // 최신순
}
