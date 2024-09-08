import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [distancia, setDistancia] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [media, setMedia] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularMedia = () => {
    if (distancia && combustivel) {
      const mediaConsumo = parseFloat(distancia) / parseFloat(combustivel);
      setMedia(mediaConsumo.toFixed(2));
      classificarConsumo(mediaConsumo);
    }
  };

  const classificarConsumo = (mediaConsumo) => {
    let classificacao;
    if (mediaConsumo >= 12) {
      classificacao = "A";
    } else if (mediaConsumo >= 10) {
      classificacao = "B";
    } else if (mediaConsumo >= 8) {
      classificacao = "C";
    } else if (mediaConsumo >= 4) {
      classificacao = "D";
    } else {
      classificacao = "E";
    }
    setClassificacao(classificacao);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calculadora de Média de Consumo de Veículo
      </Text>
      <View style={styles.inputContainer}>
        <Text>Distância Percorrida (km):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={distancia}
          onChangeText={setDistancia}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Combustível Consumido (L):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={combustivel}
          onChangeText={setCombustivel}
        />
      </View>
      <Button title="Calcular Média" onPress={calcularMedia} />
      {media !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Média de Consumo: {media} km/L</Text>
          <Text style={styles.result}>Classificação: {classificacao}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: 200,
    marginVertical: 5,
    textAlign: "center",
  },
  resultContainer: {
    marginTop: 20,
  },
  result: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
