import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function PokemonDetail() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [pokemonData, setPokemonData] = useState<any>(null);

  useEffect(() => {
    async function fetchDetail() {
      fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then((res) => res.json())
        .then((data) => {
          navigation.setOptions({
            title: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          });
          setPokemonData(data);
        });
    }
    fetchDetail();
  }, [id]);

  if (!pokemonData) return null;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 16 }}>
        <Image
          source={{ uri: pokemonData.sprites.front_default }}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            marginVertical: 20,
          }}
        />

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
            Types
          </Text>
          {pokemonData.types.map((t: any) => (
            <View
              key={t.type.name}
              style={{
                backgroundColor: "#e0e0e0",
                padding: 8,
                marginVertical: 4,
                borderRadius: 6,
              }}
            >
              <Text style={{ fontSize: 16 }}>
                {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 16, marginBottom: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
            Stats
          </Text>
          {pokemonData.stats.map((s: any) => (
            <View
              key={s.stat.name}
              style={{
                flexDirection: "row",
                padding: 8,
                justifyContent: "space-between",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 16, flex: 1 }}>
                {s.stat.name.charAt(0).toUpperCase() + s.stat.name.slice(1)}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {s.base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
