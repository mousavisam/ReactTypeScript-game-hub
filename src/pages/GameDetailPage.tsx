import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
