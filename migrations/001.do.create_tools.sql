CREATE TABLE tools (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  tool_name TEXT NOT NULL,
  tool_category TEXT NOT NULL,
  tool_desc TEXT NOT NULL,
  tool_img_filename TEXT NOT NULL
);

