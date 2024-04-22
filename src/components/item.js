import React, { useState } from 'react';

const Item = () => {
    // Состояние для ответов на загадки
    const [answers, setAnswers] = useState(new Array(6).fill(null));
    // Список загадок с вариантами ответов
    const riddles = [
        {
            id: 1,
            description: "Я говорю без уст и слышу без ушей. У меня нет тела, но я оживаю от ветра. Что я такое?",
            options: ["Эхо", "Свист", "Облако", "Музыка"],
            correct: 0
        },
        {
            id: 2,
            description: "Чем больше ты берешь, тем больше оставляешь за собой. Что это?",
            options: ["Следы", "Дыхание", "Воспоминания", "Мечты"],
            correct: 0
        },
        {
            id: 3,
            description: "Что можно увидеть с закрытыми глазами?",
            options: ["Муху", "Сон", "Свет", "Темноту"],
            correct: 2
        },
        {
            id: 4,
            description: "Что можно сломать, назвав?",
            options: ["Обещание", "Сердце", "Стекло", "Молчание"],
            correct: 3
        },
        {
            id: 5,
            description: "Какой концерт можно посетить только один раз?",
            options: ["Рок", "Классика", "Жизнь", "Цирк"],
            correct: 2
        },
        {
            id: 6,
            description: "Я всегда иду вперед, но никогда не двигаюсь. Что я?",
            options: ["Мысль", "Тень", "Вода", "Время"],
            correct: 1
        }
    ];

    // Функция для обновления ответов
    const handleAnswerChange = (riddleId, selectedOption) => {
        const updatedAnswers = [...answers];
        updatedAnswers[riddleId - 1] = selectedOption;
        setAnswers(updatedAnswers);
    };

    // Проверка ответов и вывод результата
    const checkAnswers = () => {
        let correctAnswers = 0;
        answers.forEach((answer, index) => {
            if (answer === riddles[index].correct) {
                correctAnswers++;
            }
        });
        alert(`Количество правильных ответов: ${correctAnswers}`);
    };

    return (
        <div>
            {riddles.map((riddle) => (
                <div key={riddle.id}>
                    <h3>Загадка {riddle.id}:</h3>
                    <p>{riddle.description}</p>
                    <ul>
                        {riddle.options.map((option, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`riddle${riddle.id}`}
                                        value={index}
                                        onChange={() => handleAnswerChange(riddle.id, index)}
                                        checked={answers[riddle.id - 1] === index}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={checkAnswers}>Завершить</button>
        </div>
    );
};

export default Item;