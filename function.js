function head(title) {
    document.write(`
    <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>${title}</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <header>
        <a href="Head">${title}</a>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Page 1.html">Page 1</a></li>
            <li><a href="Page 2.html">Page 2</a></li>
            <li><a href="Page 3.html">Page 3</a></li>
            <li><a href="Page 4.html">Page 4</a></li>
            <li><a href="Page 5.html">Page 5</a></li>
        </ul>
    </nav>
    <section>
    `);
}

function post(count) {
    let p=1
    do{
    document.write(`
    <div class="post">

    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nostrum!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maiores velit unde ad est alias temporibus facere enim quae! Nostrum, similique. Voluptatibus atque eligendi ut? Sed nobis fugiat labore ipsum nisi harum libero voluptatibus praesentium, cupiditate quam in vitae quibusdam laboriosam assumenda consectetur possimus, optio corporis quaerat magni non exercitationem adipisci laudantium. Nesciunt, delectus molestiae quisquam vel veniam aspernatur quos placeat reprehenderit reiciendis quibusdam. Nostrum itaque libero dolor saepe aperiam ad quaerat esse. Odit est et facilis, ea aperiam voluptate, earum obcaecati error nemo, voluptatem alias eveniet quisquam. Magni vitae debitis, voluptatem animi iste nostrum labore qui rerum error ipsa quo vel, tempora doloremque saepe. Vero distinctio nesciunt molestias ducimus culpa eius eveniet autem quasi fuga est illo aut quod placeat qui, blanditiis doloribus et nemo sit repellat nihil beatae labore. Illum repellat ratione iusto sequi laboriosam repudiandae? Natus, iusto voluptatem. Beatae sequi fuga esse voluptate totam eveniet laboriosam sunt incidunt eos dolorem, a error consectetur illo possimus modi, necessitatibus magnam impedit nihil veniam labore dicta aspernatur consequuntur neque adipisci. Assumenda quo commodi doloribus ipsum nihil dolor iste ullam porro non voluptas maxime accusamus magni enim alias, praesentium nobis aliquid unde odit cum quae quis harum! Soluta alias voluptatibus laborum laudantium delectus possimus necessitatibus repellat neque eius modi! Voluptate ratione quia sequi impedit necessitatibus mollitia dolores natus, perferendis ut ipsum nam iusto, reiciendis, ex modi itaque? Cumque vitae veniam asperiores, beatae autem qui sed, minima reiciendis impedit nostrum officiis ex, quo amet quibusdam? Soluta accusantium quis animi tempore architecto labore?</p>
      </div>
      `)
      p++
}
      while(p<=count)
}

    function foot() {
        document.write(`
        </article>
        <aside>
            <marquee behavior="scroll" direction="left"><h3>Ducat India</h3></marquee>
        </aside>
    </section>
<footer>
    <h4>Copyright@2023</h4>
</footer>
</body>
</html>`)
    }