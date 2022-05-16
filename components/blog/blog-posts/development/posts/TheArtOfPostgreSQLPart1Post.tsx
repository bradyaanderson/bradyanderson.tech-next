import Paragraph from "../../../../general/Paragraph";
import ExternalLink from "../../../../general/ExternalLink";
import Image from "../../../../general/S3Image";
import InlineCode from "../../../../general/InlineCode";
import BlockQuote from "../../../../general/BlockQuote";

function TheArtOfPostgreSQLPart1Post() {
  return (
    <div>
      <Paragraph>
        As a full-stack developer, I’ve always had a weird relationship with
        SQL. Rarely do I need to write need a query more complex than{" "}
        <InlineCode>
          SELECT * FROM &lt;table&gt; WHERE &lt;some-condition&gt;
        </InlineCode>
        . Occasionally I may need to join some data, but outside of that, I’ve
        never needed to know too much about SQL. When I code, I’ve often worked
        on systems that use{" "}
        <ExternalLink
          link={
            "https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping"
          }
        >
          Object-relational mapping
        </ExternalLink>{" "}
        meaning I can sometimes weeks without seeing or writing actual SQL. This
        relationship with SQL has left me never truly feeling comfortable with
        the language and that’s something I want to change.
      </Paragraph>

      <Paragraph>
        I recently picked up the book,{" "}
        <ExternalLink link={"https://theartofpostgresql.com/"}>
          <em>The Art of PostgreSQL</em>
        </ExternalLink>{" "}
        by Dimitri Fontaine and have spent a few hours every week reading
        through the book. I’ve read about half of the book and wanted to share
        what I’ve liked, haven’t liked, and my biggest takeaways so far.
      </Paragraph>

      <h2>What have I liked so far?</h2>

      <Paragraph>
        The author of this book, Dimitri Fontaine, provides a unique perspective
        into the importance of writing efficient SQL and the benefits of
        PostgreSQL over other database management systems. Fontaine is a
        contributor to the PostgreSQL project, so he definitely knows what he is
        talking about when it comes to Postgres. What I’ve liked best about
        Fontaine, however, is that because he is a developer, he knows how to
        evangelize SQL to other developers. He knows that thinking in SQL can be
        hard for developers who are used to working with languages that differ
        from SQL. He specifically tailors his examples to be useful software
        developers, occasionally even comparing SQL queries to equivalent code.
      </Paragraph>
      <Paragraph>
        I learn best from examples and this book not only provides plenty of
        query examples but also large real-world datasets for me to practice on.
        When I’ve tried to learn SQL in the past, I’ve worked with small,
        self-created datasets. Not only is this time-consuming to create tables
        and populate them, but having such a limited set of data is unrealistic.
        The datasets that come with “The Art of PostgreSQL” are not only large,
        but also fun to query data from. As a fan of Formula 1, it delighted me
        that one of the example datasets is an F1 database containing loads of
        data on the sport dating back decades.
      </Paragraph>

      <h2>What could have been better?</h2>

      <Paragraph>
        Sometimes the book feels like it’s going a little too fast. I will
        absolutely need to do additional reading outside of this book before I
        will feel like I’ve mastered SQL. Topics such as relations, aggregates,
        and indexes are given some time in the book, but there is more that can
        be said. Luckily, the author often provides additional resources when
        the book is lacking in explanation or examples. I have also not
        encountered any practice questions so far. I think having these would
        really be beneficial as I find I learn best when problem solving.
      </Paragraph>

      <h2>What are my biggest takeaways?</h2>

      <Paragraph>
        Of course, my biggest takeaway from reading the first half of this book
        is a better understanding of how to use PostgreSQL to store and query
        data. This will come in handy at my job and when I’m working on personal
        projects. Almost any good SQL resource will teach basic syntax though,
        so I want to focus on three of my biggest takeaways that you may not
        find in other resources.
      </Paragraph>

      <h3>Imperative vs Declarative</h3>

      <Paragraph>
        In very simple terms, with an imperative language, you write a program
        that specifies step-by-step how a process should run. Most popular
        programming languages, for example C and Java, are imperative. Even if a
        language isn’t strictly imperative, we often write code imperatively.
        For example, most Python code is imperative, but Python is
        multi-paradigm, thus giving you some ways to write non-imperative code.
      </Paragraph>
      <Paragraph>
        SQL, on the other-hand, is a declarative language. When you write an SQL
        statement, you are telling the RDBMS what you want to occur, but you do
        not specify exactly how it should happen. Instead, the RDBMS devises a
        plan for how to fulfill your request and then executes that plan.
      </Paragraph>
      <Paragraph>
        As I mentioned before, Fontaine is a developer and knows that most of us
        think approach development imperatively. In the very first chapter, he
        stresses the need to think of SQL declaratively:
      </Paragraph>

      <Paragraph>
        <BlockQuote cite={"https://theartofpostgresql.com/"}>
          "When working with SQL, as a developer we relatedly work with a type
          system and a kind of relational algebra. We write code to retrieve and
          process the data we are interested into, in the specific way we need.
          RDBMS and SQL are forcing developers to think in terms of data
          structure, and to declare both the data structure and the data set we
          want to get via our queries."
        </BlockQuote>
      </Paragraph>

      <Paragraph>
        I knew SQL was different, but I had never taken the time to know why.
        Reading about how SQL is declarative and how to approach writing
        statements has changed my perspective. SQL often frustrated me because
        it was so much different from everything else I knew, but I now know why
        it’s different. I have a long way to go, but I’ve started to enjoy
        writing SQL.
      </Paragraph>

      <h3>Let SQL work for you</h3>

      <Paragraph>
        One of Fontaine’s strongest (and perhaps a bit controversial) opinion is
        that SQL queries are extremely powerful, so why not use it to contain{" "}
        <ExternalLink link={"https://en.wikipedia.org/wiki/Business_logic"}>
          business logic
        </ExternalLink>
        . This is in contrast to a lot of other opinions you’ll find on the
        internet which say to keep business logic out of SQL. Fontaine proposes
        that one well-formed, slightly more complex SQL query can ensure both
        correctness and increase efficiency.
      </Paragraph>
      <Paragraph>
        Let’s say your API has an endpoint which requires your server to compile
        several sets of data and return this data to the user. During this
        process, your server makes several calls to your database. It then
        combines this data and sends it back to the user. It is very possible
        that during the time your server makes its first call to the database
        and last, data has changed somewhere in the database. Have you accounted
        for this? If not, you may occasionally experience unexpected behavior
        and this bug could be very hard to track down. If you could combine this
        logic into a single SQL query, this would not be an issue. An individual
        SQL query runs against a single snapshot, thus ensuring correctness.
      </Paragraph>
      <Paragraph>
        Besides correctness, when you use SQL to its fullest potential, it can
        often be more efficient. Unsurprised, SQL is extremely good at working
        with relational data and with mathematical operations. By taking
        advantage of SQL’s strengths, you may cut down overall runtime by moving
        it to SQL rather than having it performed on your server. However,
        efficiency can also come from other places. Sending requests to a
        database and receiving data back via a network can be slow. If you can
        replace multiple SQL calls with one, you’ll wait less for data to pass
        between your server and database. Finally, a few extra lines of SQL
        might replace dozens of lines of application code. Assuming this code is
        well-written and robust, this can save time in development and
        maintenance overtime.
      </Paragraph>
      <Paragraph>
        I’ve kept SQL to a minimum in most applications I’ve worked on and
        relied on other services to handle most processing. While I’m still
        forming my own opinions on how much business logic to include in my
        queries, I will not be strongly considering whether I can use SQL to
        make my code more correct and efficient. I really enjoyed reading
        Fontaine’s perspective on business logic in SQL, especially because it
        differs from a lot of other opinions you may find.{" "}
        <ExternalLink
          link={"https://tapoueh.org/blog/2017/06/sql-and-business-logic/"}
        >
          This chapter of the book
        </ExternalLink>{" "}
        can be found for free on Fontaine’s website if you’d like to read his
        reasoning yourself.
      </Paragraph>

      <h3>Postgres is awesome</h3>

      <Paragraph>
        Until now, I’ve talked a lot about SQL, but not a lot about PostgreSQL.
        Luckily, “The Art of PostgreSQL” did a great job of explaining why
        Postgres is awesome.
      </Paragraph>
      <Paragraph>
        Unlike other popular RDBMSs, PostgreSQL is open-source and maintained by
        a group of very dedicated developers (Fountaine being one of those
        developers). There is not one behemoth company that gets to dictate how
        development on Postgres should continue. Postgres is made by developers,
        for other developers
      </Paragraph>
      <Paragraph>
        Documentation for open-source projects can sometimes be lacking.
        Luckily, this is far from the case for Postgres. In fact, Postgres is
        one of the best documented projects I have ever seen. I quickly learned
        that I should always consult the official documentation first, since it
        will often contain the answer to my questions.
      </Paragraph>
      <Paragraph>
        Perhaps the best thing about Postgres is the extra extensibility and
        helpful features it includes. If you’re unaware, SQL is a standard. When
        making basic queries, you are most likely writing standard SQL which
        could run against almost any database. PostgreSQL implements almost all
        the SQL standard (
        <ExternalLink
          link={"https://www.postgresql.org/docs/current/features.html"}
        >
          see this for more details
        </ExternalLink>
        ), while also including some powerful additions.
      </Paragraph>

      <Paragraph>
        To show off the quality of Postgres documentation and some of the useful
        features, I have included links to some of my favorite pages I have
        learned about so far:
        <ul>
          <li>
            <ExternalLink
              link={
                "https://www.postgresql.org/docs/current/functions-datetime.html"
              }
            >
              Date/Time Function and Operators
            </ExternalLink>{" "}
            - As a developer, I’ve spent a long time on solving date time
            issues. Luckily, Postgres has a whole slew of date and time
            operators to make things a little easier.
          </li>
          <li>
            <ExternalLink
              link={"https://www.postgresql.org/docs/current/arrays.html"}
            >
              Arrays
            </ExternalLink>{" "}
            - Postgres has extensive support for arrays. Using them is fast and
            usually pretty efficient. You can even access individual values by
            their index.
          </li>
          <li>
            <ExternalLink
              link={
                "https://www.postgresql.org/docs/current/datatype-json.html"
              }
            >
              JSON
            </ExternalLink>{" "}
            - You can do some pretty cool things with JSON in Postgres,
            including access field values in a JSON document.
          </li>
        </ul>
      </Paragraph>

      <h2>Am I going to keep reading The Art of PostgreSQL?</h2>

      <Paragraph>
        Absolutely. While I don’t think The Art of PostgreSQL is for everyone, I
        think it is perfect for developers like me. Fontaine’s pacing,
        experience as a developer, and insights into how to use SQL to its
        fullest in software development have kept me interested and wanting to
        learn more. I’m looking forward to continuing The Art of PostgreSQL.
      </Paragraph>
    </div>
  );
}

export default TheArtOfPostgreSQLPart1Post;
