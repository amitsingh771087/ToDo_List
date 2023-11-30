import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import FallBack from "../component/fallBack";

const Todoscreens = () => {
  // initial local state
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedtodo] = useState(null);

  const handleAddTodo = () => {
    // structure of an single todo item
    // {
    //   id:"",
    //   title:""
    // }
    if(todo === ""){
      return;//if null return
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id != id);
    setTodoList(updatedTodoList);
  };
  const handleEditTodo = (todo) => {
    setEditedtodo(todo);
    setTodo(todo.title);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }
      return item;
    });
    setTodoList(updatedTodos);
    setEditedtodo(null);
    setTodo("");
  };
  // Render todo

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          // elevation: for android
        }}
      >
        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => handleEditTodo(item)}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 25,
            fontWeight: 800,
            flex: 1,
          }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="delete"
          iconColor="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        style={styles.tv}
        placeholder="Add Your Task's"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity style={styles.btn} onPress={() => handleUpdateTodo()}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: "25" }}>
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={() => handleAddTodo()}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: "25" }}>
            Add
          </Text>
        </TouchableOpacity>
      )}
      {/* Render todo list */}
      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <FallBack />}
    </View>
  );
};

export default Todoscreens;

const styles = StyleSheet.create({
  tv: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btn: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 12,
    marginVertical: 34,
    alignItems: "center",
  },
});
