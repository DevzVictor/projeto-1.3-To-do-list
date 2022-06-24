const tarefasService = require('../services/tarefas.services');

const findAllTarefasController = (req, res) => {
  const allTarefas = tarefasService.findAllTarefasService();
  res.send(allTarefas);
};

const findByIdTarefasController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenTarefa = tarefasService.findByIdTarefasService(idParam);
  res.send(chosenTarefa);
};

const createTarefasController = (req, res) => {
  const tarefa = req.body;
  const newTarefa = tarefasService.createTarefaService(tarefa);
  res.send(newTarefa);
};

const updateTarefasController = (req, res) => {
  const idParam = Number(req.params.id);
  const tarefaEdit = req.body;
  const updatedTarefa = tarefasService.updateTarefasService(
    idParam,
    tarefaEdit,
  );
  res.send(updatedTarefa);
};

const deleteTarefasController = (req, res) => {
  const idParam = req.params.id;
  tarefasService.deleteTarefasService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefasController,
  createTarefasController,
  updateTarefasController,
  deleteTarefasController,
};
