import { useState } from "react";
import { Alert, FlatList, Keyboard, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { EmptyComponent } from "./components/EmptyComponent";
import { Header } from "../../components/Header";
import { Task, Props as TaskProps } from "../../components/Task";
import { colors } from "../../config/colors";
import { stylesFunction } from "./styles";
import { ListHeader } from "./components/ListHeader";

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskDescription, setTaskDescription] = useState("");

  const styles = stylesFunction(isFocused);

  function handleAddTask() {
    // If there is
    if (tasks.find((task) => task.description === taskDescription.trim()))
      return Alert.alert(
        "Tarefa já existente!",
        "Essa tarefa já existe em sua lista."
      );

    tasks.push({ description: taskDescription.trim(), done: false });
    setTaskDescription("");
    Keyboard.dismiss();
  }

  function handleCompleteTask(description: string) {
    return setTasks((prevState) =>
      prevState.map((task) => {
        if (task.description === description) {
          return { ...task, done: !task.done };
        } else return task;
      })
    );
  }

  function handleDeleteTask(task: TaskProps) {
    return Alert.alert(
      "Excluir tarefa",
      "Deseja realmente excluir essa tarefa ?",
      [
        {
          text: "Excluir",
          style: "default",
          onPress: () =>
            setTasks((prevState) => prevState.filter((item) => item !== task)),
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputForm}>
        <TextInput
          value={taskDescription}
          onChangeText={setTaskDescription}
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray[300]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Button onPress={handleAddTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <Task
            description={item.description}
            done={item.done}
            onChecked={() => handleCompleteTask(item.description)}
            onRemove={() => handleDeleteTask(item)}
          />
        )}
        ListEmptyComponent={EmptyComponent}
        ListHeaderComponent={() => <ListHeader taskList={tasks} />}
      />
    </View>
  );
}
