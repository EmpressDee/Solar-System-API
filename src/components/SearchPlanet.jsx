import {useState} from "react";
import { getPlanetFacts } from "../services/factsApi";
import { getImage } from "../services/imagesApi";

function SearchPlanet() {
    const [searchTerm, setSearchTerm] = useState("");
    const [facts, setFacts] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);x
    const [error, setError] = useState(null);
}