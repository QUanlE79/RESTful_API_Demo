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
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": "string"
                      },
                      "description": {
                        "type": "string"
                      },
                      "release_year": {
                        "type": "integer"
                      },
                      "language_id": {
                        "type": "integer"
                      },
                      "rental_duration": {
                        "type": "integer"
                      },
                      "rental_rate": {
                        "type": "number"
                      },
                      "length": {
                        "type": "integer"
                      },
                      "replacement_cost": {
                        "type": "number"
                      },
                      "rating": {
                        "type": "string"
                      },
                      "special_features": {
                        "type": "string"
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
          },
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
                  "examples": {
                    "actorExample": {
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
                        "rating": 20.99,
                        "special_features": "Deleted Scenes,Behind the Scenes",
                        "last_update": "2006-02-15T05:03:42.000Z"
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
      }
    },
    "apis": []
  }
}

