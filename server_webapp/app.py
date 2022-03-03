from distutils.log import debug
from flask import Flask, render_template

app = Flask(__name__)

all_posts =[
    {
        "title":"post 1",
        "auther":"iShreYash",
        "content":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolor, odit magni ratione saepe distinctio similique nisi ipsum minus neque sunt corrupti officia? Facere, quasi? Vitae eos sunt nobis repellat."
    },
    {
        "title":"post 1",
        "content":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolor, odit magni ratione saepe distinctio similique nisi ipsum minus neque sunt corrupti officia? Facere, quasi? Vitae eos sunt nobis repellat."
    }
]

@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/posts")
def post():
    return render_template("posts.html", posts=all_posts)



if __name__ == "__main__":
    app.run(debug=True)
