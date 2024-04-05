<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240402192817 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C112469DE2 FOREIGN KEY (category_id) REFERENCES serie (id)');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1157AAFB1 FOREIGN KEY (serie_category_id) REFERENCES serie (id)');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('CREATE INDEX IDX_64C19C112469DE2 ON category (category_id)');
        $this->addSql('CREATE INDEX IDX_64C19C1157AAFB1 ON category (serie_category_id)');
        $this->addSql('CREATE INDEX IDX_64C19C1D94388BD ON category (serie_id)');
        $this->addSql('ALTER TABLE movie ADD video VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C112469DE2');
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C1157AAFB1');
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C1D94388BD');
        $this->addSql('DROP INDEX IDX_64C19C112469DE2 ON category');
        $this->addSql('DROP INDEX IDX_64C19C1157AAFB1 ON category');
        $this->addSql('DROP INDEX IDX_64C19C1D94388BD ON category');
        $this->addSql('ALTER TABLE movie DROP video');
    }
}
