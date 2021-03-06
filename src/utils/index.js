/* eslint-disable camelcase */
const mapDBToModel = ({ id, title, performer }) => ({
  id,
  title,
  performer,
});

const mapDBToModelDetail = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year: parseInt(year, 10),
  performer,
  genre,
  duration: parseInt(duration, 10),
  insertedAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel, mapDBToModelDetail };
