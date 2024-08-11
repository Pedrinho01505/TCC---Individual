import React from 'react'
import arduino from '/arduino.png'
import clcarga from '/clcarga.png'
import lcd from '/lcd.png'
import modulo from '/modulo.png'
import protoboard from '/protoboard.png'
import workplate from '/workplate.png'

function Materiais() {
  return (
    <main className='bg-fundosite font-openSans font-normal text-sm text-text'>
      <h1 className=' text-titulo font-bold text-center pt-[2rem] text-3xl'>Materiais</h1>
      <section className='bg-bgcaixa mx-box mb-bottom mt-top px-inline rounded-custom'>
        <div className='flex flex-col items-center'>
          <h2 className='text-titulo font-semibold pt-top text-xl'>Arduino</h2>
          <img src={arduino} alt="imagem de uma peça arduino" className='my-inline'/>
        </div>
        <p className='mb-bottom flex text-justify'>Arduino é uma plataforma de computação open-source baseado em uma simples placa com entradas e saídas tanto digitais como analógicas. Possui um próprio ambiente de desenvolvimento que implementa a Linguagem C. O Ambiente de desevolvimento (IDE) open-souce pode ser obtido gratuitamente (atualmente disponível para Mac OS X, Windows, e Linux).</p>
        <p className='pb-top'>Preço: R$ 249,00</p>
      </section>

      <section className='bg-bgcaixa mx-box mb-bottom mt-top px-inline rounded-custom'>
        <div className='flex flex-col items-center'>
          <h2 className='text-titulo font-semibold pt-top text-xl'>Célula de carga</h2>
          <img src={clcarga} alt="" className='my-inline'/>
        </div>
        <p className='mb-bottom flex text-justify'>Com essa célula de carga, é possível medir até 50kg, possibilitando criar balanças. Caso necessite fazer uma balança para até 100kg, basta utilizar 2 células de carga, 150kg 3 células de carga e assim sucessivamente, contanto que você divida a carga entre elas.</p>
        <p className='pb-top'>Preço: R$ 7,90</p>
      </section>

      <section className='bg-bgcaixa mx-box mb-bottom mt-top px-inline rounded-custom'>
        <div className='flex flex-col items-center'>
          <h2 className='text-titulo font-semibold pt-top text-xl'>Módulo HX711</h2>
          <img src={modulo} alt="" className='my-inline'/>
        </div>
        <p className='mb-bottom flex text-justify'>Módulo conversor e amplificador de 24 bits, geralmente utilizado para amplificar sinais de células de carga (como, por exemplo, a Célula de Carga 50Kg), possibilitando a leitura através de um microntrolador como PIC, Arduino, Rasberry Pi, entre outros.</p>
        <p className='pb-top'>Preço: R$ 5,90</p>
      </section>

      <section className='bg-bgcaixa mx-box mb-bottom mt-top px-inline rounded-custom'>
        <div className='flex flex-col items-center'>
          <h2 className='text-titulo font-semibold pt-top text-xl'>Protoboard</h2>
          <img src={protoboard} alt="" className='my-inline'/>
        </div>
        <p className='mb-bottom flex text-justify'>Ela possui 2 barramentos para alimentação, 30 colunas e 10 linhas - um total de 400 pontos. Todos os pinos estão espaçados pelo padrão de 0,1". O espaçamento no meio é perfeito para componentes do tipo DIP. A protoboard aceita fios de 29 AWG até 20 AWG. Esta protoboard possui um adesivo auto colante. Você também pode ligar várias destas juntas e aumentar a área de prototipagem.</p>
        <p className='pb-top'>Preço: R$ 7,50</p>
      </section>

      <section className='bg-bgcaixa mx-box mb-bottom mt-top px-inline rounded-custom'>
        <div className='flex flex-col items-center'>
          <h2 className='text-titulo font-semibold pt-top text-xl'>Workplate</h2>
          <img src={workplate} alt="" className='my-inline'/>
        </div>
        <p className='mb-bottom flex text-justify'>A WorkPlate 400 é uma base de trabalho para montar sua placa Arduino junto a uma protoboard de 400 furos, criando assim um ambiente ideal para o desenvolvimento de projetos de uma forma prática e dinâmica.</p>
        <p className='pb-top'>Preço: R$ 14,90</p>
      </section>

      <section className='bg-bgcaixa mx-box mt-top px-inline rounded-custom'>
        <div className='flex flex-col items-center'>
          <h2 className='text-titulo font-semibold pt-top text-xl'>Display LCD</h2>
          <img src={lcd} alt="" className='my-inline'/>
        </div>
        <p className='mb-bottom flex text-justify'>Utilizando apenas 2 pinos de seu Arduino, ou qualquer outro microcontrolador que tenha suporte a comunicação I2C, você consegue escrever mensagens no LCD. Não só isso, usando o sistema de endereçamento de shift registers, você consegue ligar um LCD no outro através dos conectores LATCH, e usar até 8 LCDs deste tipo com os mesmos 2 pinos.</p>
        <p className='pb-top'>Preço: R$ 23,90</p>
      </section>
    </main>
  )
}

export default Materiais