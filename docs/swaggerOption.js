export default {
  option:
  {
    "definition": {
      "openapi": "3.0.0",
      "servers": [
        {
          "url": "http://127.0.0.1:3000/api/v1"
        }
      ],
      "info": {
        "title": "Sakila API",
        "version": "1.0.0"
      },
      "paths": {
        "/actors": {
          "get": {
            "summary": "Lấy danh sách các diễn viên",
            "tags": [
              "Get all actor"
            ],
            "responses": {
              "200": {
                "description": "Danh sách diễn viên đã được trả về thành công"
              }
            }
          },
          "post": {
            "summary": "Thêm một diễn viên mới",
            "tags": [
              "Add an actor"
            ],
            "requestBody": {
              "description": "Thông tin diễn viên mới",
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/actor_schema"
                  },
                  "examples": {
                    "actorExample": {
                      "summary": "Example of an actor object",
                      "value": {
                        "first_name": "John",
                        "last_name": "Doe"
                      }
                    }
                  }
                }
              }
            },
            "responses": {
              "201": {
                "description": "Diễn viên đã được thêm thành công"
              }
            }
          }
        },
        "/actors/{id}": {
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer"
              },
              "description": "ID của diễn viên"
            }
          ],
          "get": {
            "tags": [
              "Get an actor by id"
            ],
            "summary": "Lấy thông tin của diễn viên bằng ID",
            "responses": {
              "200": {
                "description": "Thông tin của diễn viên đã được trả về thành công"
              },
              "404": {
                "description": "Không tìm thấy diễn viên với ID đã cung cấp"
              }
            }
          },
          "delete": {
            "tags": [
              "Delete an actor by id"
            ],
            "summary": "Xóa diễn viên bằng ID",
            "responses": {
              "200": {
                "description": "Diễn viên đã được xóa thành công"
              },
              "400": {
                "description": "Không tìm thấy ID của diễn viên"
              }
            }
          },
          "patch": {
            "tags": [
              "Update an actor"
            ],
            "summary": "Cập nhật thông tin của một diễn viên bằng ID",
            "requestBody": {
              "description": "Thông tin mới của diễn viên",
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/actor_schema"
                  },
                  "examples": {
                    "actorExample": {
                      "summary": "Example of an actor object",
                      "value": {
                        "first_name": "Richard"
                      }
                    }
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Cập nhật thông tin của diễn viên thành công"
              },
              "400": {
                "description": "Không tìm thấy ID của diễn viên"
              }
            }
          }
        },
        "/films": {
          "get": {
            "summary": "Lấy danh sách phim",
            "tags": [
              "Get all films"
            ],
            "responses": {
              "200": {
                "description": "Lấy tất cả phim"
              }
            }
          },
          "post": {
            "summary": "Thêm một bộ phim mới",
            "tags": [
              "Add a film"
            ],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/film_schema"
                  },
                  "examples": {
                    "filmExample": {
                      "summary": "Example of a film object",
                      "value": {
                        "title": "Academy Hero",
                        "description": "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",
                        "release_year": 2020,
                        "language_id": 2,
                        "original_language_id": null,
                        "rental_duration": 6,
                        "rental_rate": 0.99,
                        "length": 86,
                        "replacement_cost": 20.99,
                        "rating": "PG",
                        "special_features": "Deleted Scenes, Behind the Scenes"
                      }
                    }
                  }
                }
              }
            },
            "responses": {
              "201": {
                "description": "Bộ phim mới đã được thêm thành công"
              },
              "400": {
                "description": "Yêu cầu không hợp lệ"
              },
              "500": {
                "description": "Lỗi server"
              }
            }
          }
        },
        "/films/{id}": {
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer"
              },
              "description": "ID của film"
            }
          ],
          "get": {
            "summary": "Lấy thông tin của bộ phim bằng ID",
            "description": "Trả về thông tin của một bộ phim dựa trên ID.",
            "tags": [
              "Get a film by id"
            ],
            "responses": {
              "200": {
                "description": "Thông tin của bộ phim đã được trả về thành công."
              },
              "404": {
                "description": "Không tìm thấy bộ phim với ID đã cung cấp."
              }
            }
          },
          "delete": {
            "tags": [
              "Delete a film by id"
            ],
            "summary": "Xóa film bằng ID",
            "responses": {
              "200": {
                "description": "Film đã được xóa thành công"
              },
              "400": {
                "description": "Không tìm thấy ID của film"
              }
            }
          },
          "patch": {
            "tags": [
              "Update a film"
            ],
            "summary": "Cập nhật thông tin của một phim bằng ID",
            "requestBody": {
              "description": "Thông tin mới của phim",
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/film_schema"
                  },
                  "examples": {
                    "filmExample": {
                      "summary": "Example of an actor object",
                      "value": {
                        "title": "ACADEMY DINOSAUR",
                        "description": "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",
                        "release_year": 2006,
                        "language_id": 1,
                        "original_language_id": null,
                        "rental_duration": 6,
                        "rental_rate": 0.99,
                        "length": 86,
                        "replacement_cost": 20.99,
                        "rating": "20.99",
                        "special_features": "Deleted Scenes,Behind the Scenes"
                      }
                    }
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Cập nhật thông tin của phim thành công"
              },
              "400": {
                "description": "Không tìm thấy ID của phim"
              }
            }
          }
        }
      },
      "components": {
        "schemas": {
          "actor_schema": {
            "type": "object",
            "properties": {
              "first_name": {
                "type": "string",
                "description": "Tên của diễn viên."
              },
              "last_name": {
                "type": "string",
                "description": "Họ của diễn viên."
              }
            },
            "required": [
              "first_name",
              "last_name"
            ]
          },
          "film_schema": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "description": "Tiêu đề của bộ phim."
              },
              "description": {
                "type": "string",
                "description": "Mô tả về bộ phim."
              },
              "release_year": {
                "type": "integer",
                "description": "Năm phát hành của bộ phim."
              },
              "language_id": {
                "type": "integer",
                "description": "ID ngôn ngữ của bộ phim."
              },
              "rental_duration": {
                "type": "integer",
                "description": "Thời lượng cho thuê của bộ phim (số ngày)."
              },
              "rental_rate": {
                "type": "number",
                "description": "Giá thuê của bộ phim."
              },
              "length": {
                "type": "integer",
                "description": "Độ dài của bộ phim (phút)."
              },
              "replacement_cost": {
                "type": "number",
                "description": "Giá thay thế của bộ phim."
              },
              "rating": {
                "type": "string",
                "description": "Phân loại của bộ phim."
              },
              "special_features": {
                "type": "string",
                "description": "Các tính năng đặc biệt của bộ phim."
              }
            },
            "required": [
              "title",
              "description",
              "language_id"
            ]
          }
        }
      }
    },
    "apis": []
  }
}

