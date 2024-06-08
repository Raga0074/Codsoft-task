import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper'


const Todoscreen = () => {

//initial local states
 const[todo, setTodo]= useState("");
 const[todoList, setTodoList]= useState([]);

//Handle Add Todo
const handleAddTodo = () => {
  //Structure for todo list
  //{
    //id: ,
    //title:,
 // }

 if(todo ==""){
   return;
 }

  setTodoList([...todoList,{id: Date.now().toString(), title: todo}]);
  setTodo("");
}

//Hnadle Delete Todo
const handleDeleteTodo = (id) => {
  const updatedTodoList = todoList.filter((todo)= todo.id !==id);
  setTodoList(updatedTodoList);
};
 //Render TOdo list
  const renderTodos = ({item, index}) => {
    return (
      <View style = {{backgroundColor: 'lightgrey', 
                      borderRadius: 15,
                      marginVertical: 9,
                      paddingVertical: 20,
                      paddingHorizontal: 15,
                      elevation: 5.5,  
                      shadowColor: 'black',  
                      shadowOpacity: 0.3,  
                      shadowRadius: 15,
                      flexDirection: "row",
                      alignItems: 'center',

    }}
      >
        
        <Text style={{flex:1}}>{item.title}</Text>
        <IconButton icon="pencil"/>
        <IconButton icon="delete" 
        onPress={() =>handleDeleteTodo(item.id)}/>
      </View>
    );
  };

    return (
    <SafeAreaView>
    <View style={{marginHorizontal:17}}>
      <Text style={{fontSize: 20, 
                    fontWeight: 900, 
                    paddingVertical: 10,
                    marginVertical: 38}}>Todo-List🚀</Text>
        <TextInput
        style= {{borderWidth: 2, 
                  borderColor: 'blue', 
                  borderRadius: 5, 
                  paddingVertical: 8, 
                  paddingHorizontal: 8,}} 
        placeholder='Add a Task!✍️'
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
        />

        <TouchableOpacity style={{backgroundColor: "#00ff00",
                                  paddingVertical: 8,
                                  borderRadius: 6,
                                  marginVertical: 20,
                                  paddingVertical: 15,
                                  marginHorizontal: 15,
                                  alignItems: 'center',
                                  }}
                                  onPress={() => handleAddTodo()}
          >
          <Text>Add  ➕</Text>
        </TouchableOpacity>
        
        {/* Rendering Todo List*/ }
            
            <FlatList data = {todoList} renderItem={renderTodos}/>
    </View>
    </SafeAreaView>
  )
}

export default Todoscreen

const styles = StyleSheet.create({})