import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const pacientesAgendados = [
  {
    id: 1,
    nome: 'Ian A.',
    cpf: '123.456.789-01',
    dataNascimento: '03/08/2006',
    endereco: 'Rua Murilo Romeiro, 967',
    valorConsulta: 100,
  },
  {
    id: 2,
    nome: 'Lucas K',
    cpf: '123.456.789-01',
    dataNascimento: '01/09/2005',
    endereco: 'Rua Bruno Bandeira, 286',
    valorConsulta: 100,
  },
  {
    id: 3,
    nome: 'Daniel S.',
    cpf: '123.456.789-01',
    dataNascimento: '22/02/2006',
    endereco: 'Rua B, 243',
    valorConsulta: 100,
  },
  {
    id: 4,
    nome: 'Emilio F.',
    cpf: '123.456.789-01',
    dataNascimento: '012/06/2004',
    endereco: 'Rua C, 498',
    valorConsulta: 100,
  },
  {
    id: 5,
    nome: 'Tiago M.',
    cpf: '123.456.789-01',
    dataNascimento: '05/01/2005',
    endereco: 'Rua D, 467',
    valorConsulta: 100,
  },

];

function Consulta({ navigation }) {
  return (
    <View>
      <FlatList
        data={pacientesAgendados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>CPF: {item.cpf}</Text>
            <Text>Data de Nascimento: {item.dataNascimento}</Text>
            <Text>Endereço: {item.endereco}</Text>
            <Text>Valor da Consulta: R${item.valorConsulta.toFixed(2)}</Text>
            {}
            <Button
              title="Editar"
              onPress={() => navigation.navigate('Edição', { paciente: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

export default Consulta;