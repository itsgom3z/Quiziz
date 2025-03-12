import React, { useState } from "react";
import {Card, ProgressBar, ProgressFill, OptionButton, Button} from './AppCss.jsx'


const questions = [
    {
        id: 1,
        information: "",
        question: "De acuerdo con el croquis anterior, cual es la ubicacion aproximada de Costa Rica segun los paralelos:",
        options: ["83 y 86 longitud occidental", "83 y 86 longitud oriental", "8 y 11 latitud norte", "8 y 11 latidud sur"],
        answer: "8 y 11 latitud norte"
    },
    {
        id: 2,
        information: "1. Se ubica en el istmo centroamericano. \n2. Tiene un clima calido y seco en todo el territorio nacional. \n3. Sus costas son bañadas por los océanos Pacífico e índico. \n4. Presenta ventajas para las comunicaciones marítimas y aéreas.",
        question: "Con cuáles números de los anteriores se identifican dos características geográficas de Costa Rica?",
        options: ["1 y 2", "1 y 4", "2 y 3", "3 y 4"],
        answer: "1 y 4"
    },
    {
        id: 3,
        information: "Costa Rica goza de un clime muy agradable, de vegetación y fauna abundante ya que se ubica en la zona climatica __________.",
        question: "Con cuál opción se completa correctamente el esquema anterior?",
        options: ["Fría", "Seca", "Templada", "Intertropical"],
        answer: "Intertropical"
    },
    {
        id: 4,
        information: "Costa Rica:\nUne a América del Norte y América del Sur,\n__________,\nSu extension territorial continental es de 51,100 km2.",
        question: "Con cuál opción se completa correctamente el esquema anterior?",
        options: ["Su vegetación y su fuana son muy escasas.", "Sus playas poseen poca atraccion turística.", "Todos sus puertos se localizan en las costas del Pacífico.", "Se localiza a seis horas del meridiano de Greenwich"],
        answer: "Se localiza a seis horas del meridiano de Greenwich"
    },
    {
        id: 5,
        information: "La actual Constitución Política de Costa Rica establece que los límites del territorio están comprendidos entre el mar Caribe, el oceáno Pacífico y las Repúblicas de Nicaragua y Panamá. El tratado de límites entre Costa Rica y Nicaragua se firmo en 1858 con el nombre de __________.",
        question: "Con cuál opción se completa correctamente la informaciòn anterior?",
        options: ["Echandi Montero-Fernández Jaén", "Gámez Bonilla-Fernández Jaén", "Cañas-Jérez", "Soto-Keith"],
        answer: "Cañas-Jérez"
    },
    {
        id: 6,
        information: "Posee la menor extensión territorial de las provincias de Costa Rica.\nUna de sus ciudades principales se conoce con el nombre de 'La ciudad de las flores'.\nLa mayor parte del parque nacional Braulio Carillo está situada en esta provincia.",
        question: "Las características anteriores identifican a la provincia de:",
        options: ["Limón", "Cartago", "Heredia", "San José"],
        answer: "Heredia"
    },
    {
        id: 7,
        information: "Presenta grandes extensiones de llanuras. aptas para la ganadería y el cultivo de granos.\nRegión de gran folclor en Costa Rica, Sobresalen las tradicaionales bombas.\nSe encuentra integrada por un total de once cantones.",
        question: "Las características anteriores identifican a la provincia de Costa Rica denominada:",
        options: ["Alajuela", "Heredia", "San José", "Guanacaste"],
        answer: "Guanacaste"
    },
    {
        id: 8,
        information: "",
        question: "Cuáles son los nombres de tres cantones de la provincia de Cartago?",
        options: ["Alfaro Ruiz-San Mateo-Guatuso", "Oreamuno-La Union-Jiménez", "Guácimo-Pococí-Talamanca", "Tarrazú-Turrabares-Dota"],
        answer: "Oreamuno-La Union-Jiménez"
    },
    {
        id: 9,
        information: "Esta ubicado en la provincia de Limón, su cabecera se llama Bratsi; es uno de los cantones menos conocidos y desarrollados de Costa Rica. Se haya habitado en gran parte por aborígenes como los cabécares y bribris.",
        question: "En el texto anterior, se identifican algunas características del canton denominado:",
        options: ["Escazú", "Guarco", "Guatuso", "Talamanca"],
        answer: "Talamanca"
    },
    {
        id: 10,
        information: "Carace de actividad volcánica.\nTiene una dirección de noroeste-sureste.\nPosee la máxima elevación del sistema montañoso de Costa Rica. ",
        question: "Con cual opciòn se completa correctamente el esquema anterior?",
        options: ["Fila Costeña", "Fila Brunqueña", "Cordillera de Talamanca", "Cordillera Minera de Tilarán"],
        answer: "Cordillera de Talamanca"
    },
    {
        id: 11,
        information: "Las llanuras de Pacífico de Costa Rica son mas pequeñas y angostas que las del Caribe debido a la ceranía de las montañas a la costa son de origen aluvial y muy fértiles para las actividades agropecuarias.",
        question: "Dos ejemplos de estas llanuras son:",
        options: ["San Carlos y Sarapiquí", "Santa Clara y Estrella", "Guatuso y Sixaola", "Tárcoles y Parrita"],
        answer: "Tárcoles y Parrita"
    },
    {
        id: 12,
        information: "",
        question: "Cuál es una característica del Valle Central de Costa Rica",
        options: ["Es una zona poco habitada donde predominan las fincas bananeras", "Es convergente, ya que se forma por la unión de los riós General y Coto Brus", "Los cerros de Ochomogo lo dividen en dos secciones: Oriental y Occidental", "La sección Oriental está ocupada por las ciudades de San José, Heredia y Alajuela"],
        answer: "Los cerros de Ochomogo lo dividen en dos secciones: Oriental y Occidental"
    },
    {
        id: 13,
        information: "El relieve de Costa Rica está constituido por llanuras, depresiones, sierras, cordilleras y valles entre otros, estas formas del relieve oscilan entre los 0msnm hasta los 3830msnm.",
        question: "El texto anterior hace referencia al principal factor que modifica el clima en Costa Rica, denominado:",
        options: ["Altitud", "Latitud", "Precipitaciones", "Presión atmosférica"],
        answer: "Altidud"
    }
    // Other questions remain the same...
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ color: "black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Card>
        {!showResult ? (
          <>
            <ProgressBar>
              <ProgressFill progress={((currentQuestion + 1) / questions.length) * 100} />
            </ProgressBar>
            {questions[currentQuestion].information && (
              <div style={{marginBottom: "16px", padding: "8px", backgroundColor: "#e0e0e0", borderRadius: "5px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>Información:</h3>
                <p>
                  {questions[currentQuestion].information.split("\n").map((line, index) => (
                    <span key={index}>{line}<br /></span>
                  ))}
                </p>
              </div>
            )}
            <h2 style={{marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }}>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].options.map((option, index) => (
              <OptionButton
                key={index}
                selected={selectedOption === option}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </OptionButton>
            ))}
            <Button onClick={handleAnswer} disabled={!selectedOption} style={{ marginTop: "16px" }}>
              Next
            </Button>
          </>
        ) : (
          <div >
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Quiz Completed!</h2>
            <p style={{ fontSize: "16px" }}>Your score: {score} / {questions.length}</p>
            <Button onClick={() => { setCurrentQuestion(0); setScore(0); setShowResult(false); }} style={{ marginTop: "16px" }}>
              Restart Quiz
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default QuizApp;
