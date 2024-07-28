from .. import db

class User(db.Model):
    """ User Model for storing user related details """
    __tablename__ = "user"

    id= db.Column(db.Integer, primary_key=True, autoincrement=True)
    username= db.Column(db.String(50), unique=True, nullable=False)
    age= db.Column(db.Integer, nullable=False)
    weight= db.Column(db.Integer, nullable=False)
    height= db.Column(db.Integer, nullable=False)
    sex= db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return "<User '{}'>".format(self.username)