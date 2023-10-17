export default  {option:
{
  "definition":{

  "openapi": "3.0.0",
  "servers": [
    {
      "url": "http://127.0.0.1:3000/api/v1"
    }
  ],
  "info": {
    "title": "SAKILA API",
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
    }
  }
},
  "apis":[]
}
}
