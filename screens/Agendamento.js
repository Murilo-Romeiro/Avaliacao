import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function Agendamento() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');

  const agendarConsulta = () => {
    const dadosPaciente = {
      nome,
      cpf,
      dataNascimento,
      endereco,
    };

    console.log('Dados do Paciente:', dadosPaciente);
  };

  return (
    <View>
      <TextInput
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput placeholder="CPF" value={cpf} onChangeText={setCpf} />
      <TextInput
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <TextInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
      <Button title="Agendar" onPress={agendarConsulta} />
    </View>
  );
}

export default Agendamento;