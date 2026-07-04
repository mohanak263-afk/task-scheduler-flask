from flask import Flask, render_template, request, redirect

app = Flask(__name__)

tasks = []

# Home Page
@app.route('/')
def home():
    return render_template('index.html', tasks=tasks)


# Add Task
@app.route('/add', methods=['POST'])
def add():

    task = {
        "title": request.form['title'],
        "description": request.form['description'],
        "priority": request.form['priority'],
        "date": request.form['date'],
        "completed": False
    }

    tasks.append(task)

    return redirect('/')


# Complete Task
@app.route('/complete/<int:index>')
def complete(index):

    if 0 <= index < len(tasks):
        tasks[index]["completed"] = True

    return redirect('/')


# Delete Task
@app.route('/delete/<int:index>')
def delete(index):

    if 0 <= index < len(tasks):
        tasks.pop(index)

    return redirect('/')


# Edit Task Page
@app.route('/edit/<int:index>')
def edit(index):

    if 0 <= index < len(tasks):
        return render_template(
            "edit.html",
            task=tasks[index],
            index=index
        )

    return redirect('/')


# Update Task
@app.route('/update/<int:index>', methods=['POST'])
def update(index):

    if 0 <= index < len(tasks):

        tasks[index]["title"] = request.form["title"]
        tasks[index]["description"] = request.form["description"]
        tasks[index]["priority"] = request.form["priority"]
        tasks[index]["date"] = request.form["date"]

    return redirect('/')


# Run Application
if __name__ == "__main__":
    app.run(debug=True)