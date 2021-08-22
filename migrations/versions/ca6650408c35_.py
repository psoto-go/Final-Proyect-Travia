"""empty message

Revision ID: ca6650408c35
Revises: 
Create Date: 2021-08-21 12:13:52.920055

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ca6650408c35'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('city',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('description', sa.String(length=5000), nullable=True),
    sa.Column('url', sa.String(length=500), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=True),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('kind', sa.String(length=10), nullable=False),
    sa.Column('created_date', sa.DateTime(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('hotel',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('description', sa.String(length=5000), nullable=True),
    sa.Column('longitude', sa.String(length=100), nullable=True),
    sa.Column('latitude', sa.String(length=100), nullable=True),
    sa.Column('favorite', sa.Boolean(), nullable=False),
    sa.Column('city_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['city_id'], ['city.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('hotel_archives',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('hotel_id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=500), nullable=True),
    sa.ForeignKeyConstraint(['hotel_id'], ['hotel.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('hotel_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=5000), nullable=False),
    sa.Column('characteristic', sa.String(length=200), nullable=False),
    sa.Column('favorite', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['hotel_id'], ['hotel.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('room',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('kind', sa.String(length=120), nullable=False),
    sa.Column('number_of_beds', sa.Integer(), nullable=False),
    sa.Column('number_of_persons', sa.Integer(), nullable=False),
    sa.Column('start_date', sa.String(length=120), nullable=True),
    sa.Column('end_date', sa.String(length=120), nullable=True),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('hotel_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['hotel_id'], ['hotel.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('hotel_id', sa.Integer(), nullable=True),
    sa.Column('service_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['hotel_id'], ['hotel.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['service.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('booking',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('hotel_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=False),
    sa.Column('start_date', sa.String(length=120), nullable=True),
    sa.Column('end_date', sa.String(length=120), nullable=True),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['hotel_id'], ['hotel.id'], ),
    sa.ForeignKeyConstraint(['room_id'], ['room.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('room_archives',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=500), nullable=True),
    sa.ForeignKeyConstraint(['room_id'], ['room.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('room_archives')
    op.drop_table('booking')
    op.drop_table('services')
    op.drop_table('room')
    op.drop_table('reviews')
    op.drop_table('hotel_archives')
    op.drop_table('hotel')
    op.drop_table('user')
    op.drop_table('service')
    op.drop_table('city')
    # ### end Alembic commands ###
