#Problem        : Volleyball Rotations
#Language       : Python 3
#Compiled Using : py_compile
#Version        : Python 3.4.3
#Input for your program will be provided from STDIN
#Print out all output from your program to STDOUT

from sys import stdin

class Queue:

    def __init__(self, lst):
        self._items = lst

    def add(self, item):
        self._items.append(item)

    def pop(self):
        el = self._items[0]
        self._items = self._items[1:]
        return el

def changeLineup(players, lineup, setter):
    temp_players = []

    player = players[-1]
    if player != setter:
        # add em to the lineup and rotate
        lineup.add(player)

        new = lineup.pop()
        # rotate lineup
        players[0], players[1], players[2], players[3], players[4], players[5] = new, players[0], players[1], players[2], players[3], players[4]

        # for i in range(1, 6):
        #     temp_players.append(players[i])
        # temp_players.append(new)
        # for i in range(0, 6):
        #     players[i] = temp_players[i]

    else:

        # for i in range(1, 6):
        #     temp_players.append(players[i])
        # temp_players.append(players[0])
        # for i in range(0, 6):
        #     players[i] = temp_players[i]

        # rotate lineup
        players[0], players[1], players[2], players[3], players[4], players[5] = players[5], players[0], players[1], players[
            2], players[3], players[4]

# read data
n = int(stdin.readline().strip())
setter = stdin.readline().strip()

# players
players = stdin.readline().strip().split(" ")

# lineup (in queue)
line = stdin.readline().strip().split()
lineup = Queue(line[1:])


players[0], players[1], players[2], players[3], players[4], players[5] = players[0], players[5], players[4], players[3], players[2], players[1]

for i in range(n):
    changeLineup(players, lineup, setter)

players[0], players[1], players[2], players[3], players[4], players[5] = players[0], players[5], players[4], players[3], players[2], players[1]

ans = ""
for i in players:
    ans += i + " "

ans = ans[0:len(ans)-1]
print(ans)
