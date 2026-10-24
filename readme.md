# Ex01-Parte B

Para esta segunda parte acabei por optar escolher um bloco que se desloca lentamente: neste caso o bloco azul desliza suavemente, enquanto o resto da composição fica parada. Sendo o único elemento generativo.

A cada imagem, um contador de tempo (t) avança ligeiramente. Este valor passa por noise(), que desenvolve números que mudam de forma suave, e depois por map(), que os converte em deslocamentos em pixéis: até 18 px na horizontal (dx) e até 10 px na vertical (dy). Estes valores são somados à posição no bloco azul. O noiseSeed(7) fixa o ponto de partida, devido a isso o movimento acaba por ser sempre o medo de cada vez que o sketch é aberto.

Acabei por escolher este deslocamento pois a ordem de Modriana ssenta em blocos que encaixam exatamente entre linhas. Um bloque se se solta do sítio quebra esta ideia de encaixe perfeito, mas tmb consegue passar por despercebido, dado que o movimento doi propositadamente feito para ser algo bastante ligeiro.
Escolhi o bloco azul pois ocupa a zona mais baixa e estável na minha opinião da composição.
Optei também por usar "noise" em vez de "random", pois eu procurava um movimento contínuo e orgânico, não algo brusco. Quis intruduzir algo sem destruir a composição. Devido a isso o deslocamento é de poucos pixéis e bastante lento para ser súbtil. 
As linha pretas ao ficarem rígidas e imóveis, o bloco azul passa por baixo delas, criando algo que escapa à ordem.