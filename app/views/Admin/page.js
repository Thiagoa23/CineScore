"use client";

import React, { useState } from "react";
import styles from "./AdminPage.module.css";
import useGenres from "../../hooks/useGenres";
import { searchMoviesByName } from "../../services/movieService";
import { getMovieById } from "../../services/movieService";

const AdminPage = () => {
    const [filmData, setFilmData] = useState({
        name: "",
        synopsis: "",
        releaseDate: "",
        director: "",
        actors: "",
        imageUrl: "",
        primaryGenre: "",
        otherGenres: [],
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [openModal, setOpenModal] = useState("");
    const { genres, loading, error } = useGenres();

    const handleFilmInputChange = (e) => {
        const { name, value } = e.target;
        setFilmData({ ...filmData, [name]: value });
    };

    const handleGenreSelect = (id, type) => {
        if (type === "primary") {
            setFilmData({ ...filmData, primaryGenre: id });
            setOpenModal(""); // Fecha o modal
        } else if (type === "other") {
            if (!filmData.otherGenres.includes(id)) {
                setFilmData({ ...filmData, otherGenres: [...filmData.otherGenres, id] });
            }
        }
    };

    const handleRemoveOtherGenre = (id) => {
        setFilmData({
            ...filmData,
            otherGenres: filmData.otherGenres.filter((genre) => genre !== id),
        });
    };

    const handleClearFields = () => {
        setFilmData({
            name: "",
            synopsis: "",
            releaseDate: "",
            director: "",
            actors: "",
            imageUrl: "",
            primaryGenre: "",
            otherGenres: [],
        });
    };

    const handleSearchFilm = async () => {
        if (!searchQuery.trim()) return;

        try {
            const results = await searchMoviesByName(searchQuery.trim());
            setSearchResults(results);
            setOpenModal("searchResults");
        } catch (err) {
            console.error("Erro ao buscar filmes:", err);
            alert("Erro ao buscar filmes. Tente novamente.");
        }
    };

    const handleSelectMovie = async (movie) => {
        try {
            console.log("Filme selecionado (parcial):", movie);

            // Busca os detalhes completos do filme
            const detailedMovie = await getMovieById(movie.id);
            console.log("Filme detalhado:", detailedMovie);

            // Atualiza os campos com os dados detalhados
            setFilmData({
                name: detailedMovie.name || "",
                synopsis: detailedMovie.synopsis || "",
                releaseDate: detailedMovie.releaseDate || "",
                director: detailedMovie.director || "",
                actors: detailedMovie.actors ? detailedMovie.actors.join(", ") : "",
                imageUrl: detailedMovie.imageUrl || "",
                primaryGenre: detailedMovie.primaryGenre || "",
                otherGenres: detailedMovie.otherGenres || [],
            });
            setOpenModal("");
        } catch (error) {
            console.error("Erro ao buscar detalhes do filme:", error);
            alert("Não foi possível buscar os detalhes do filme.");
        }
    };


    const handleSubmitFilm = () => {
        console.log("Film data submitted:", filmData);
        // Adicionar lógica de requisição API
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastrar Filme</h1>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Cadastrar Filme</h2>

                <div className={styles.flexContainer}>
                    {/* Imagem e Pesquisa */}
                    <div className={styles.imageContainer}>
                        {filmData.imageUrl ? (
                            <img src={filmData.imageUrl} alt={filmData.name} className={styles.image} />
                        ) : (
                            <p>Sem imagem disponível</p>
                        )}
                    </div>

                    <div className={styles.inputContainer}>
                        <div className={styles.flexRow}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome do Filme"
                                value={filmData.name}
                                onChange={handleFilmInputChange}
                                className={styles.inputField}
                            />
                            <input
                                type="date"
                                name="releaseDate"
                                value={filmData.releaseDate}
                                onChange={handleFilmInputChange}
                                className={styles.dateField}
                            />
                            <div className={styles.inputButtonContainer}>
                                <input
                                    type="text"
                                    placeholder="ID do Gênero Principal"
                                    value={filmData.primaryGenre}
                                    readOnly
                                    className={`${styles.inputField} ${styles.readOnlyInput}`}
                                />
                                <button
                                    className={styles.button}
                                    onClick={() => setOpenModal("primaryGenre")}
                                >
                                    Selecionar Gênero Principal
                                </button>
                            </div>
                        </div>
                        <div className={styles.inputButtonContainer}>
                            <input
                                type="text"
                                placeholder="IDs de Outros Gêneros"
                                value={filmData.otherGenres.join(", ")}
                                readOnly
                                className={`${styles.inputField} ${styles.readOnlyInput}`}
                            />
                            <button
                                className={styles.button}
                                onClick={() => setOpenModal("otherGenres")}
                            >
                                Selecionar Outros Gêneros
                            </button>
                        </div>
                        <div className={styles.flexRow}>
                            <input
                                type="text"
                                name="director"
                                placeholder="Diretor"
                                value={filmData.director}
                                onChange={handleFilmInputChange}
                                className={styles.inputField}
                            />
                            <input
                                type="text"
                                name="actors"
                                placeholder="Atores (separados por vírgula)"
                                value={filmData.actors}
                                onChange={handleFilmInputChange}
                                className={styles.inputField}
                            />
                        </div>
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="URL da Imagem"
                            value={filmData.imageUrl}
                            onChange={handleFilmInputChange}
                            className={styles.inputField}
                        />
                    </div>
                </div>

                {/* Sinopse */}
                <textarea
                    name="synopsis"
                    placeholder="Sinopse"
                    value={filmData.synopsis}
                    onChange={handleFilmInputChange}
                    className={styles.textArea}
                ></textarea>

                {/* Campo de Pesquisa */}
                <div className={styles.searchContainer}>
                    <p className={styles.helperText}>
                        Pesquise o filme pelo nome para edição ou remoção.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                        <input
                            type="text"
                            placeholder="Pesquisar Filme"
                            className={styles.searchField}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={handleSearchFilm} className={styles.searchButton}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="24"
                                height="24"
                                fill="currentColor"
                            >
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </button>


                    </div>
                </div>

                {/* Botões de Ação */}
                <div className={styles.flexRow}>
                    <button onClick={handleSubmitFilm} className={styles.button}>
                        Cadastrar Filme
                    </button>
                    <button onClick={handleClearFields} className={styles.button}>
                        Limpar Campos
                    </button>
                    <button className={styles.button}>Deletar Filme</button>
                    <button className={styles.button}>Editar Filme</button>
                </div>
            </div>

            {/* Modal para Selecionar Gênero Principal */}
            {openModal === "primaryGenre" && (
                <div className={styles.modal}>
                    <h3>Selecione o Gênero Principal</h3>
                    {loading && <p>Carregando gêneros...</p>}
                    {error && <p>Erro ao carregar gêneros</p>}
                    {genres.map((genre) => (
                        <div
                            key={genre.id}
                            className={`${styles.genreOption} ${filmData.primaryGenre === genre.id ? styles.selected : ""
                                }`}
                            onClick={() => handleGenreSelect(genre.id, "primary")}
                        >
                            {genre.name}
                        </div>
                    ))}
                    <button
                        className={styles.modalClose}
                        onClick={() => setOpenModal("")}
                    >
                        X
                    </button>
                </div>
            )}

            {/* Modal para Selecionar Outros Gêneros */}
            {openModal === "otherGenres" && (
                <div className={styles.modal}>
                    <h3>Selecione Outros Gêneros</h3>
                    <p className={styles.helperText}>Clique novamente no gênero para removê-lo.</p>
                    {loading && <p>Carregando gêneros...</p>}
                    {error && <p>Erro ao carregar gêneros</p>}
                    {genres.map((genre) => (
                        <div
                            key={genre.id}
                            className={`${styles.genreOption} ${filmData.otherGenres.includes(genre.id) ? styles.selected : ""
                                }`}
                            onClick={() => {
                                if (filmData.otherGenres.includes(genre.id)) {
                                    handleRemoveOtherGenre(genre.id);
                                } else {
                                    handleGenreSelect(genre.id, "other");
                                }
                            }}
                        >
                            {genre.name}
                        </div>
                    ))}
                    <button
                        className={styles.modalClose}
                        onClick={() => setOpenModal("")}
                    >
                        X
                    </button>
                </div>
            )}


            {/* Modal de Resultados da Pesquisa */}
            {openModal === "searchResults" && (
                <div className={`${styles.modalSearchResults}`}>
                    <h3>Resultados da Pesquisa</h3>
                    <p className={styles.helperText}>
                        Selecione o filme que deseja para editar ou excluir.
                    </p>
                    {searchResults.length === 0 ? (
                        <p className={styles.helperText}>Nenhum filme encontrado.</p>
                    ) : (
                        <div className={`${styles.grid}`}>
                            {searchResults.map((movie) => (
                                <div
                                    key={movie.id}
                                    className={`${styles.cardOverlay}`}
                                    onClick={() => handleSelectMovie(movie)}
                                >
                                    <div className={`${styles.smallCard}`}>
                                        <img src={movie.imageUrl} alt={movie.name} />
                                        <h4>{movie.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <button
                        className={`${styles.modalClose}`}
                        onClick={() => setOpenModal("")}
                    >
                        X
                    </button>
                </div>
            )}

        </div>
    );
};

export default AdminPage;
