package com.example.gerenciador_de_tarefas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gerenciador_de_tarefas.model.Tarefa;
import com.example.gerenciador_de_tarefas.repository.TarefaRepository;

@Service
public class TarefaService {
    @Autowired
    private TarefaRepository tarefaRepository;

    public List<Tarefa> listarTarefas() {
        return tarefaRepository.findAll();
    }

    public Optional<Tarefa> buscarPorId(Long id) {
        return tarefaRepository.findById(id);
    }

    public Tarefa salvarTarefa(Tarefa tarefa) {
        return tarefaRepository.save(tarefa);
    }

    public void deletarTarefa(Long id) {
        tarefaRepository.deleteById(id);
    }

    public Tarefa atualizarDescricao(Long id, String novaDescricao) {
        Optional<Tarefa> optionalTarefa = tarefaRepository.findById(id);
        if (optionalTarefa.isPresent()) {
            Tarefa tarefa = optionalTarefa.get();
            tarefa.setDescricao(novaDescricao);
            return tarefaRepository.save(tarefa);
        } else {
            throw new IllegalArgumentException("Tarefa não encontrada com o ID fornecido: " + id);
        }
    }

    public Tarefa atualizarStatus(Long id, boolean novoStatus) {
        Optional<Tarefa> optionalTarefa = tarefaRepository.findById(id);
        if (optionalTarefa.isPresent()) {
            Tarefa tarefa = optionalTarefa.get();
            tarefa.setConcluida(novoStatus);
            return tarefaRepository.save(tarefa);
        } else {
            throw new IllegalArgumentException("Tarefa não encontrada com o ID fornecido: " + id);
        }
    }
}
