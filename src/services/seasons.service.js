import http from "../http-common";
class SeasonsService {
  getAll() {
    return http.get("/seasons");
  }
  get(id) {
    return http.get(`/seasons/${id}`);
  }
}
export default new SeasonsService();
