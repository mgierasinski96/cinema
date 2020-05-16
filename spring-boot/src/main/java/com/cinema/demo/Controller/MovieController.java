package com.cinema.demo.Controller;

import com.cinema.demo.Model.Example;
import com.cinema.demo.Model.Movie;
import com.cinema.demo.Model.Search;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    private final String MY_API_KEY = "13dba106";

    // ex http://www.omdbapi.com/?apikey=13dba106&t=Avengers
    @GetMapping("/{title}")
    public List<Search> getManyMoviesByTitle(@PathVariable("title") String title)
    {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        HttpEntity httpEntity = new HttpEntity(httpHeaders);
        // &y=2020
        ResponseEntity<Example> responseEntity = restTemplate.exchange("http://www.omdbapi.com/?apikey=13dba106&s="+title,
                HttpMethod.GET, httpEntity,Example.class);

        return responseEntity.getBody().getSearch();
    }

    @GetMapping("/movieDetails/{title}")
    public Movie getMovieByTitle(@PathVariable("title") String title)
    {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        HttpEntity httpEntity = new HttpEntity(httpHeaders);
        // &y=2020
        ResponseEntity<Movie> responseEntity = restTemplate.exchange("http://www.omdbapi.com/?apikey=13dba106&t="+title,
                HttpMethod.GET, httpEntity,Movie.class);

        return responseEntity.getBody();
    }
}
