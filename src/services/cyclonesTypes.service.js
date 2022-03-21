import http from "../http-common";
class CyclonesTypesService {
  getAll() {
    return http.get("/cyclones_types");
  }
  get(id) {
    return http.get(`/cyclones_types/${id}`);
  }
}
export default new CyclonesTypesService();
