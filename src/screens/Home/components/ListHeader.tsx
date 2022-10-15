import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "../../../components/Text";
import { Props as TaskProps } from "../../../components/Task";

import { colors } from "../../../config/colors";

type Props = {
  taskList: TaskProps[];
};

export function ListHeader({ taskList }: Props) {
  const [createdCounter, setCreatedCounter] = useState(0);
  const [doneCounter, setDoneCounter] = useState(0);

  useEffect(() => {
    taskList.filter((task) => {
      if (task.done === true) setDoneCounter((prevState) => prevState + 1);
      else setCreatedCounter((prevState) => prevState + 1);
    });
  }, [taskList]);

  type CounterProps = {
    value: number;
  };

  function Counter({ value }: CounterProps) {
    return (
      <View style={styles.counter}>
        <Text style={styles.number}>{value.toString()}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <Text style={{ ...styles.label, color: colors.blue.default }}>
          Criadas
        </Text>
        <Counter value={createdCounter} />
      </View>
      <View style={styles.labelView}>
        <Text style={{ ...styles.label, color: colors.purple.default }}>
          Concluídas
        </Text>
        <Counter value={doneCounter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  labelView: {
    flexDirection: "row",
  },
  label: {
    fontSize: 14,
    lineHeight: 16,
    marginRight: 8,
    fontWeight: "bold",
  },
  counter: {
    width: 25,
    height: 19,
    backgroundColor: colors.gray[400],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  number: {
    fontWeight: "bold",
    fontSize: 12,
    color: colors.gray[100],
  },
});
