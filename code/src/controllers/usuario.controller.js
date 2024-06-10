import model from "../model/usuario.model.js";

function findAll(request, response) {
  model
    .findAll()
    .then(function (res) {
      response.json(res).status(200);
    })
    .catch(function (err) {
      response.json(err).status(500);
    });
}

function findById(request, response) {
  model
    .findOne({ where: { id: request.params.id } })
    .then(function (res) {
      response.json(res).status(200);
    })
    .catch(function (err) {
      response.json(err).status(500);
    });
}

function create(request, response) {
  model
    .create(
      {
        accountName: request.body.accountName,
        password: request.body.password,
        userName: request.body.userName,
        birthDate: request.body.birthDate,
        city: request.body.city,
        state: request.body.state,
        address: request.body.address,
        preferences: request.body.preferences,
        about: request.body.about,
        photo: request.body.photo,
        phoneNumber: request.body.phoneNumber,
        website: request.body.website,
        instagram: request.body.instagram,
        facebook: request.body.facebook,
        twitter: request.body.twitter,
        whatsapp: request.body.whatsapp
      },
      { where: { id: request.params.id } },
    )
    .then(function (res) {
      response.status(200).send(res);
    })
    .catch((e) => {
      response.json(e).status(500);
    });
}

function deleteById(request, response) {
  model
  .destroy({ where: { id: request.params.id } })
  .then(function (res) {
    response.status(200).send();
    })
    .catch(function (err) {
      response.json(err).status(500);
    });
  }
  
  function update(request, response) {
    model
    .update(
      {
        accountName: request.body.accountName,
        password: request.body.password,
        userName: request.body.userName,
        birthDate: request.body.birthDate,
        city: request.body.city,
        state: request.body.state,
        address: request.body.address,
        preferences: request.body.preferences,
        about: request.body.about,
        photo: request.body.photo,
        phoneNumber: request.body.phoneNumber,
        website: request.body.website,
        instagram: request.body.instagram,
        facebook: request.body.facebook,
        twitter: request.body.twitter,
        whatsapp: request.body.whatsapp
      },
      { where: { id: request.params.id } },
    )
    .then(function (res) {
      response.status(200).send(res);
    })
    .catch((e) => {
      response.json(e).status(500);
    });
}

export default {
  findAll,
  findById,
  create,
  deleteById,
  update,
};

