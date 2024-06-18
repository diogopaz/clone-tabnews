function status(request, response) {
  response.status(200).json({ status: "Tudo certo" });
}

export default status;
