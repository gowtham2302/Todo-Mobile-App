import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text) {
      setTodos([...todos, text]);
      setText("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const updateTodo = (index) => {
    setText(todos[index]);
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 25 }}>Todo App</Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            height: 40,
            color: "#fff",
            borderColor: "gray",
            borderWidth: 1,
            width: 200,
            margin: 10,
            padding: 5,
          }}
          placeholder="Type here to translate!"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <Button onPress={addTodo} title="Add Todo" />
      </View>
      <ScrollView>
        {todos.map((todo, index) => (
          <View>
            <View
              key={index}
              style={{
                flexDirection: "row",
                margin: 8,
                flexWrap: "wrap",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 200,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  borderColor: "gray",
                  borderWidth: 1,
                  padding: 10,
                  margin: 5,
                }}
              >
                {todo}
              </Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Button onPress={() => updateTodo(index)} title="Update" />
                <Button onPress={() => removeTodo(index)} title="Delete" />
              </View>
            </View>
            <HorizontalLine />
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
}; 

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    display: "flex",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
