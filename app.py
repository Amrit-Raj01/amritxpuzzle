from flask import Flask, render_template, request

app = Flask(__name__)

# List of words for each level
words = {
    "Beginner": ["CAT", "DOG", "SUN", "MOON", "STAR", "FISH", "TREE", "BOOK", "BALL", "CAKE"],
    "Medium": ["APPLE", "GRAPE", "LEMON", "TIGER", "SNAKE", "HORSE", "EAGLE", "BEACH", "RIVER", "MOUNTAIN"],
    "High": ["COMPUTER", "KEYBOARD", "MONITOR", "PYTHON", "JAVASCRIPT", "PROGRAM", "DEVELOPER", "CHALLENGE", "SOLUTION", "CREATIVE"]
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/game")
def game():
    level = request.args.get("level")
    if level not in words:
        return "Invalid level selected."
    return render_template("game.html", level=level, words=words[level])

if __name__ == "__main__":
    app.run(debug=True)
