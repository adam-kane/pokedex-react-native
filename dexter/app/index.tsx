import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 24, fontWeight: "bold", padding: 16, marginTop: 40 }}
      >
        Pokemon List
      </Text>
      <FlatList
        data={pokemon}
        renderItem={({ item }) => {
          const urlParts = item.url.split("/");
          const id = urlParts[urlParts.length - 2];

          return (
            <TouchableOpacity
              onPress={() => router.push(`/pokemon/${id}`)}
              style={{
                padding: 16,
                backgroundColor: "#f0f0f0",
                marginVertical: 8,
                marginHorizontal: 16,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 18 }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
