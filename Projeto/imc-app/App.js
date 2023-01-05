import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Switch, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground  } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState(false);
  const toggleSwitch = () => setGenero(previousState => !previousState);
  const handleCalcular = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    const imc = weight / (height * height);

    if (genero) {
      if (imc < 20.7)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está abaixo do peso`
        );
        if (imc > 20.7 && imc < 26.4)
        return Alert.alert(
          "Normal!",
          `Seu IMC é de ${imc.toFixed(2)} é considerado Normal.`
        );
        if (imc > 26.4 && imc < 27.8)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} um pouco acima do peso`
        );
        if (imc > 27.8 && imc < 31.1)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está acima do peso`
        );
        if (imc > 31.1)
        return Alert.alert(
          "Obeso!",
          `Seu IMC é de ${imc.toFixed(2)} esta Obeso`
        );
    } else { //feminino
      if (imc < 19.1)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está abaixo do peso`
        );
        if (imc > 19.1 && imc < 25.8)
        return Alert.alert(
          "Normal!",
          `Seu IMC é de ${imc.toFixed(2)} é considerado Normal.`
        );
        if (imc > 25.8 && imc < 27.3)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} um pouco acima do peso`
        );
        if (imc > 27.3 && imc < 32.3)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está acima do peso`
        );
        if (imc > 32.3  )
        return Alert.alert(
          "Obeso!",
          `Seu IMC é de ${imc.toFixed(2)} esta Obeso`
        );

    }
  };
  //31:30 https://www.youtube.com/watch?v=BNhQIDYeoRc
  return (
    <View style={styles.container}>
      <View style={styles.inputGroupRow }>

        <Text>Feminino</Text>
        <Switch
          trackColor={{ false: "#FFC0CB", true: "#81b0ff" }}
          thumbColor={genero ? "#81b0ff" : "#FFC0CB"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />

        <Text>Masculino</Text>
      </View>

      <Text>Altura</Text>
      <TextInput
        keyboardType="numeric-pad" //somente numeros
        style={styles.input}
        value={altura}
        onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
      />

      <Text>Peso</Text>
      <TextInput 
        keyboardType="numeric-pad"
        style={styles.input} //caixinha de texto
        value={peso} 
        onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}
      />

      <TouchableOpacity 
        onPress={handleCalcular} 
        style={styles.button}
      >
        <Text style={styles.buttontext}>Calcular</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputGroupRow:{
  flexDirection:"row", //sexo mesma linha
  alignItems: 'center',
  justifyContent: 'center',
  },

  input: {
    height: 54 ,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#6d66e8",
  },

  button: {
    backgroundColor: "#A54",
    width: "80%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderRadius: 8,
    marginTop: 16,
  },

  buttontext: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFFF",
    fontSize: 18,
  },

});
