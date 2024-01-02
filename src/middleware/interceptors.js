const responseInterceptor = (req, res, next) => {
  const originalJson = res.json;

  res.json = (message, data) => {
    const response = {
      code: res.statusCode,
      status: true,
      message: message || "Berhasil memuat permintaan",
    };

    if (res.statusCode > 400) {
      response.status = false;
    }

    if (data) {
      if (Array.isArray(data)) {
        response["data"] = data;
      } else if (data.totalPages || data.page || data.totalData) {
        response["totalPages"] = data.totalPages;
        response["page"] = data.page;
        response["totalData"] = data.totalData;
        response["data"] = data.data;
      } else {
        response["data"] = data;
      }
    }

    originalJson.call(res, response);
  };

  next();
};

module.exports = responseInterceptor;
