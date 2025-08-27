import inquirer from "inquirer";
import fs from "fs";
import listaTarefas from "./tarefas.json" assert { type: "json" };

const salvarTarefa = () => {
  fs.writeFileSync("tarefas.json", JSON.stringify(listaTarefas, null, 2));
};

const arrumarIndice = () => {
  if (listaTarefas.length > 0) {
    listaTarefas.forEach((tarefa, i) => {
      tarefa.numero = i + 1;
    });
  } else {
    console.log("Nenhuma tarefa encontrada");
  }
};

const mostrarTarefas = () => {
  console.log("============= LISTA DE TAREFAS =============");
  console.log("(Para sair a qualquer momento, 'pressione Ctrl + C') \n");

  if (listaTarefas.length > 0) {
    for (let i = 0; i < listaTarefas.length; i++) {
      console.log(
        listaTarefas[i].numero,
        listaTarefas[i].nome,
        "\n",
        listaTarefas[i].descricao,
        "\n",
        listaTarefas[i].feita ? "𒊹 Concluída " : "Ｏ Pendente",
        "\n"
      );
    }
  } else {
    console.log("Sem tarefas para mostrar \n");
  }
};
