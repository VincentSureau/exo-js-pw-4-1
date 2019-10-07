import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

const findEqualNumbers = ()=> {
    let results = [];
    for(let i = 111; i <= 999; i++) {
        let numbers = (i.toString().split(''));
        const reducer = (accumulator, currentValue) => accumulator + Math.pow(currentValue,2);
        if (i == numbers.reduce(reducer)) {
            console.log(i);
            results.push(i);
        }
    }
    console.log(results);
    return results;
}

const Exo1 = () => {
    const [numbers, setNumbers] = useState([]);

    useEffect (() => {
        setNumbers(findEqualNumbers());
    }, []);

    return ( 
        <React.Fragment>
            <h1 className="mb-4">Exercice 1</h1>
            <blockquote class="blockquote text-center bg-light">
                <footer class="blockquote-footer">Ennoncé</footer>
                <p class="mb-0">
                Let A, B and C be three digits between 1 and 9.
                </p>
                <p class="mb-0">
                Note the number ABC, which will therefore have a value between 111 and 999, where A represents the hundreds, B the tens and C the units, namely ABC A ∗ 100 B ∗ 10 C ∗ 1 .
                </p>
                <p class="mb-0">
                Find A, B and C, such as : A³ + B³ + C³, with A³ = A * A * A , or a Javascript Math Object (function) can be used
                </p>
                <p class="mb-0">
                Use an iterative method, i. e. a test of all possible values for A, B and C .
                </p>
                <p class="mb-0">
                The program will display the right solutions found as the iterations progress, using the console.log() statement.
                </p>
                <p class="mb-0">
                Example, if A = 2, B = 5, C = 3, ABC will have the value of 253. Is it equal to 2³ + 5³ + 3³ ?
                </p>
            </blockquote>
            <ListGroup>
                { numbers.map(number => (
                    <ListGroup.Item action variant="secondary">
                        {number}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <ol>
            </ol>
        </React.Fragment>
     );
}
 
export default Exo1;