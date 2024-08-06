import axios from 'axios';

export default class APIService {
  constructor() {
    this.key = '682127ed972e56f6bb70ae743d23c1d7';
    this.baseURL = 'https://api.themoviedb.org/3/';
    this.page = 0;
  }

  resetPage() {
    this.page = 0;
  }

  async getTrends(param, page) {
    if (arguments.length < 2) {
      try {
        this.page += 1;
        const response = await axios.get(
          `${this.baseURL}trending/movie/${param}?api_key=${this.key}&page=${this.page}`
        );
        return response.data.results;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          `${this.baseURL}trending/movie/${param}?api_key=${this.key}&page=${page}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getUpcoming() {
    try {
      const response = await axios.get(
        `${this.baseURL}movie/upcoming?api_key=${this.key}`
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async searchMovieByQuery(query, page) {
    if (arguments.length < 2) {
      try {
        this.page += 1;
        const response = await axios.get(
          `${this.baseURL}search/movie?api_key=${this.key}&query=${query}&page=${this.page}`
        );
        return response.data.results;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          `${this.baseURL}search/movie?api_key=${this.key}&query=${query}&page=${page}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getMovieInfo(id) {
    try {
      const response = await axios.get(
        `${this.baseURL}movie/${id}?api_key=${this.key}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieTrailer(id) {
    try {
      const response = await axios.get(
        `${this.baseURL}movie/${id}/videos?api_key=${this.key}`
      );
      return response.data.results[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getGenresList() {
    try {
      const response = await axios.get(
        `${this.baseURL}genre/movie/list?api_key=${this.key}`
      );
      return response.data.genres;
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieContries() {
    try {
      const response = await axios.get(
        `${this.baseURL}configuration/countries?api_key=${this.key}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
