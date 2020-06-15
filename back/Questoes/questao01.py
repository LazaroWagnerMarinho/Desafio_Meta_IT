elementos = list(input('Digita os elementos: ').split(' '))
alvo = int(input('Digite um numero para o alvo: '))
posicoes = list()
num1: int
num2: int
soma: int


for pos, numeros in enumerate(elementos):
    elementos = [int(i) for i in elementos]
    num1 = (elementos[pos])
    if pos + 1 < len(elementos):
        num2 = (elementos[pos + 1])

    soma = num1 + num2
    if soma == alvo:
        posicoes.append(elementos.index(num1))
        posicoes.append(elementos.index(num2))

print(f'posicoes: {posicoes}')
