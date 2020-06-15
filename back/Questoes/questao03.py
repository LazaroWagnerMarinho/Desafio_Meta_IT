elementos = [7, 1, 5, 3, 6, 4]
soma = 1


def opcao():
    print('#'*30)
    print(' valores:', elementos)
    print('''    
           [1] Comprar Ação
           [2] Vender Ação
           [3] Alterar os valores da Ação 
           ''')
    return int(input('Escolha uma opção? '))

def novoElementos():
    global elementos
    elementos = list(input('Digita os elementos: ').split(' '))
    elementos = [int(i) for i in elementos]


def calcularLucro(compra, venda):
    elementosNum = elementos.copy()
    elementosNum.insert(0, 0)
    if compra:
        print('=' * 30)
        valorDaCompra = elementosNum[compra]
        precoDoElemeto = elementosNum[venda]
        soma = precoDoElemeto - valorDaCompra
        print(f'Seu lucro foi: {soma}')
        print(f'dia da Compra é {diaDaCompra} e dia da Venda é {diaDaVenda}')
        return soma
    else:
        print('nao foi registratado o dia da compra!')


while soma >= 0:
    opcaoEscolhido = opcao()
    if opcaoEscolhido == 1:
        diaDaCompra = int(input('Digite o dia da compra: '))
        diaDaVenda = int(input('Digite o dia da venda: '))
        soma = calcularLucro(diaDaCompra, diaDaVenda)
    elif opcaoEscolhido == 2:
        print('-' * 30)
        print('Você precisa comprar Ação:')
        print('-' * 30)
    elif opcaoEscolhido == 3:
        novoElementos()
else:
    print('='*30)
    print('>>> Não tem valor para fazer nova compra!')
