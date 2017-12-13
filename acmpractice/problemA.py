import os
from sys import stdin

def main() -> None:
    os.chdir("C://Users//Sid19//Desktop//acm")
    file = open("data.txt")

    first = []
    last = []

    n = int(stdin.readline())
    while(n!=0):
        for i in range(0, n):
            name = stdin.readline().strip().split()
            first.append(name[0][0])
            last.append(name[1][0])
        compare()


def compare(first, last):

    alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    alphFirst = [0]*26
    alphLast = [0]*26
    alph = [alphFirst, alphLast]

    for f in first:
        alphFirst[alph.index(f)]+=1

    for l in last:
        alphLast[alph.index(l)]+=1





def getMax(alph):
    max = -1
    which = -1
    maxIndex = -1
    for i in range(0, 2):
        for j in range(0, 26):
            if (alph[i][j] > max):
                max = alph[0][j]
                maxIndex = j
                which = i

    return [maxIndex, which]
