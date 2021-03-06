from datetime import datetime
from slugify import slugify

from v1.apps.models import *

class Character(Base, TimestampMixin):
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='user_characters')
    campaign = db.relationship('Campaign', backref='campaign_characters')
    campaign_id = db.Column(db.ForeignKey('campaign.id'), index=True)
    image_id = db.Column(db.Integer, db.ForeignKey('image.id'))
    image = db.relationship("Image")
