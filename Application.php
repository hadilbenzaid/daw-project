<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Application extends Model {
    protected $table = 'Application';
    
    use HasFactory;

    protected $fillable = ['project_id', 'group_id', 'status'];

    public function project() {
        return $this->belongsTo(Project::class);
    }

    public function group() {
        return $this->belongsTo(Group::class);
    }
}

