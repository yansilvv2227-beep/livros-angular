$livro1 = @{
    titulo = "O Senhor dos Anéis"
    autor = "J.R.R. Tolkien"
    editora = "Intrínseca"
    paginas = 1200
} | ConvertTo-Json

Write-Host "=== Testando GET /livros (antes de adicionar) ==="
$response = Invoke-WebRequest -Uri 'http://localhost:3030/livros' -Method GET -UseBasicParsing
Write-Host $response.Content

Write-Host "`n=== Testando POST /livros (adicionar livro 1) ==="
$response = Invoke-WebRequest -Uri 'http://localhost:3030/livros' -Method POST -ContentType 'application/json' -Body $livro1 -UseBasicParsing
Write-Host $response.Content

$livro2 = @{
    titulo = "Harry Potter"
    autor = "J.K. Rowling"
    editora = "Rocco"
    paginas = 309
} | ConvertTo-Json

Write-Host "`n=== Testando POST /livros (adicionar livro 2) ==="
$response = Invoke-WebRequest -Uri 'http://localhost:3030/livros' -Method POST -ContentType 'application/json' -Body $livro2 -UseBasicParsing
Write-Host $response.Content

Write-Host "`n=== Testando GET /livros (após adicionar) ==="
$response = Invoke-WebRequest -Uri 'http://localhost:3030/livros' -Method GET -UseBasicParsing
$livros = $response.Content | ConvertFrom-Json
Write-Host "Total de livros: $($livros.Count)"
$livros | ForEach-Object { Write-Host "- $($_.titulo) por $($_.autor) (_id: $($_._id))" }

if ($livros.Count -gt 0) {
    $idParaDeletar = $livros[0]._id
    Write-Host "`n=== Testando DELETE /livros/:id (deletar primeiro livro) ==="
    $response = Invoke-WebRequest -Uri "http://localhost:3030/livros/$idParaDeletar" -Method DELETE -UseBasicParsing
    Write-Host $response.Content

    Write-Host "`n=== Testando GET /livros (após deletar) ==="
    $response = Invoke-WebRequest -Uri 'http://localhost:3030/livros' -Method GET -UseBasicParsing
    $livrosRestantes = $response.Content | ConvertFrom-Json
    Write-Host "Total de livros: $($livrosRestantes.Count)"
    $livrosRestantes | ForEach-Object { Write-Host "- $($_.titulo) por $($_.autor)" }
}
