const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const ml1 = document.getElementById('ml1');
const ml2 = document.getElementById('ml2');
let time;


let ml01 = 0;
let ml02 = 0;
let s01 = 0;
let s02 = 0;
let m01 = 0;
let m02 = 0;
let h01 = 0;
let h02 = 0;



const start = () => {
    clearInterval(time);
    time = setInterval(() => {
        ml01++;
        if (ml01 > 9) {
            ml01 = 0;
            ml02++;
            if (ml02 > 9) {
                ml02 = 0;
                s01++;
                if (s01 > 9) {
                    s01 = 0;
                    s02++;
                    if (s02 > 5) {
                        s02 = 0;
                        m01++;
                        if (m01 > 9) {
                            m01 = 0;
                            m02++;
                            if (m02 > 5) {
                                m02 = 0;
                                h01++;
                                if (h01 > 9) {
                                    h01 = 0;
                                    h02++;
                                    if (h02 > 12) {
                                        ml01 = 0;
                                        ml02 = 0;
                                        s01 = 0;
                                        s02 = 0;
                                        m01 = 0;
                                        m02 = 0;
                                        h01 = 0;
                                        h02 = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        h1.innerText = h01;
        h2.innerText = h02;
        m1.innerText = m01;
        m2.innerText = m02;
        s1.innerText = s01;
        s2.innerText = s02;
        ml1.innerText = ml01;
        ml2.innerText = ml02;
    }, 10);
}

const stop = () => {
    clearInterval(time);
}

const restart = () => {
    clearInterval(time);
    ml01 = 0;
    ml02 = 0;
    s01 = 0;
    s02 = 0;
    m01 = 0;
    m02 = 0;
    h01 = 0;
    h02 = 0;
    h1.innerText = 0;
    h2.innerText = 0;
    m1.innerText = 0;
    m2.innerText = 0;
    s1.innerText = 0;
    s2.innerText = 0;
    ml1.innerText = 0;
    ml2.innerText = 0;
}