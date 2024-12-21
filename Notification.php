<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Notification extends Model {
    
    protected $table = 'Notification';

    use HasFactory;

    protected $fillable = ['user_id', 'content', 'read_at'];

    public function user() {
        return $this->belongsTo(Student::class, 'user_id');
    }
}

