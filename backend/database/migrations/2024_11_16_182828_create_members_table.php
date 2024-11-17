<?php

use App\Enums\Status;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected $status ;

    /**
     * Constructor to initialize the default status.
     */
    public function __construct()
    {
        // Set the default status
        $this->status = Status::default();
    }

    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->string('email')->index();
            $table->integer('age')->nullable();
            $table->string('phone')->nullable();
            $table->string('status')->default(
                $this->status->value
            );
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
